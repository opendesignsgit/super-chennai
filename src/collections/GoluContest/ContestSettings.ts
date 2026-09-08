import { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '@/access/authenticated'

export const ContestSettings: GlobalConfig = {
  slug: 'golu-contest-settings',
  label: 'Contest Settings',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: '🪔 Golu Contest',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero & Info',
          fields: [
            { name: 'contestName', type: 'text', defaultValue: 'Super Chennai Golu Contest 2026' },
            { name: 'contestSlug', type: 'text', defaultValue: 'golu-contest-2026' },
            { name: 'contestYear', type: 'number', defaultValue: 2026 },
            { name: 'heroTitle', type: 'text', defaultValue: 'Super Chennai Golu Contest' },
            { name: 'heroSubtitle', type: 'text', defaultValue: 'Celebrate Navratri & Win Grand Prizes!' },
            { name: 'heroDescription', type: 'textarea', defaultValue: 'Share your traditional Golu display with Chennai. Show your passion, artistic decorations, and special Super Chennai element!' },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'Contest Dates',
          fields: [
            { name: 'registrationStartDate', type: 'date' },
            { name: 'registrationEndDate', type: 'date' },
            { name: 'submissionStartDate', type: 'date' },
            { name: 'submissionEndDate', type: 'date' },
          ],
        },
        {
          label: 'Rules & Limits',
          fields: [
            { name: 'goluMinImages', type: 'number', defaultValue: 2 },
            { name: 'goluMaxImages', type: 'number', defaultValue: 5 },
            { name: 'superChennaiMinImages', type: 'number', defaultValue: 1 },
            { name: 'superChennaiMaxImages', type: 'number', defaultValue: 3 },
            { name: 'maxImageSizeMB', type: 'number', defaultValue: 10 },
          ],
        },
        {
          label: 'Rich Text Content',
          fields: [
            { name: 'termsAndConditions', type: 'richText', editor: lexicalEditor({}) },
            { name: 'contestRules', type: 'richText', editor: lexicalEditor({}) },
            { name: 'registrationSuccessMessage', type: 'richText', editor: lexicalEditor({}) },
            { name: 'submissionSuccessMessage', type: 'richText', editor: lexicalEditor({}) },
          ],
        },
        {
          label: 'Controls',
          fields: [
            { name: 'registrationEnabled', type: 'checkbox', defaultValue: true },
            { name: 'submissionEnabled', type: 'checkbox', defaultValue: true },
          ],
        },
      ],
    },
  ],
}