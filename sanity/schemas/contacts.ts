export default  {
    name: "contacts",
    type: 'document',
    title: 'Contacts',
    fields: [
        {
            name: "firstName",
            type: "string",
            title: 'First Name'
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone Number'
        },
        {
            name: 'inquirer',
            type: 'string',
            title: 'Inquirer'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'subject',
            type: 'string',
            title: 'Subject'
        },
        {
            name: 'message',
            type: 'text',
            title: 'message'
        },
    ]
}