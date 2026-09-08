import { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  LinkFeature,
} from '@payloadcms/richtext-lexical'
import { authenticated } from '@/access/authenticated'

export const GoluSubmissions: CollectionConfig<'golu-submissions'> = {
  slug: 'golu-submissions',
  labels: {
    singular: 'Golu Submission',
    plural: 'Golu Submissions',
  },
  access: {
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['participant', 'status', 'createdAt'],
    group: '🪔 Golu Contest',
  },
  fields: [
    {
      name: 'participant',
      type: 'relationship',
      relationTo: 'golu-users',
      required: true,
      unique: true,
    },
    {
      name: 'goluPhotographs',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'sortOrder',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'superChennaiCornerPhotographs',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'sortOrder',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'aboutYourGolu',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          LinkFeature({}),
        ],
      }),
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pendingReview',
      options: [
        { label: 'Pending Review', value: 'pendingReview' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Shortlisted', value: 'shortlisted' },
        { label: 'Finalist', value: 'finalist' },
        { label: 'Winner', value: 'winner' },
      ],
      access: {
        // Redact internal status from public frontend responses
        read: ({ req }) => Boolean(req.user),
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      required: false,
      access: {
        read: ({ req }) => Boolean(req.user),
      },
      admin: {
        position: 'sidebar',
        description: 'Internal admin notes - strictly hidden from participants.',
      },
    },
    {
      name: 'actionHistory',
      type: 'array',
      access: {
        read: ({ req }) => Boolean(req.user),
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      fields: [
        {
          name: 'action',
          type: 'text',
          required: true,
        },
        {
          name: 'performedBy',
          type: 'text',
          required: true,
        },
        {
          name: 'performedAt',
          type: 'date',
          required: true,
        },
        {
          name: 'notes',
          type: 'text',
        },
      ],
    },
  ],
}