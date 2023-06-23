import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const questionAnswer = {
    name: 'questionsAnswers',
    type: 'object',
    title: 'Question Answers',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [
                {
                    type: 'block',
                    lists: [{ title: 'Bullet', value: 'bullet' }],
                }
            ]
        },
    ]
}

export default {
    name: "faq",
    type: 'document',
    title: 'FAQs',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'section',
            title: 'Section',
            type: 'string',
        },
        {
            name: 'questionAnswer',
            title: 'questionAnswer',
            type: 'array',
            of: [
                {
                    type: 'questionsAnswers',
                }
            ]
        },
        orderRankField({ type: "faq" }),

    ]
}