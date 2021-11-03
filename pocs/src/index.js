require('dotenv').config()

const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_SECRETS
})

const main = async () => {
    const listDatabases = await notion.databases.list()

    const agendaBloqueada = await listDatabases.results.filter(item => item.title[0].text.content == 'Agenda Bloqueada')

    const datasAgendaBloqueada = await notion.databases.query({
        database_id: agendaBloqueada[0].id,
        filter: {
            property: 'Name',
            text: {
                contains: 'Leandro'
            }
        }
    })

    datasAgendaBloqueada.results.forEach(item => {
        console.log(item.properties.Date.date.start)
    })

}

main()