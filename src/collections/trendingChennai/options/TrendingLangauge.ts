import type { CollectionConfig } from 'payload';

export const TrendingLanguages: CollectionConfig = {
  slug: 'TrendingLanguages',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'code', 'region', 'isActive'],
    group: 'Master Data', // optional grouping in admin
  },

  access: {
    read: () => true, // public read
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Language Name',
    },

    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      label: 'Language Code',
      admin: {
        description: 'ISO code (e.g., ta, en, hi)',
      },
    },

    {
      name: 'nativeName',
      type: 'text',
      label: 'Native Name',
      admin: {
        description: 'Name in its own language (e.g., தமிழ், हिंदी)',
      },
    },

    {
      name: 'region',
      type: 'select',
      options: [
        { label: 'India', value: 'india' },
        { label: 'Asia', value: 'asia' },
        { label: 'Europe', value: 'europe' },
        { label: 'Africa', value: 'africa' },
        { label: 'Global', value: 'global' },
      ],
      label: 'Region',
    },

    {
      name: 'flag',
      type: 'upload',
      relationTo: 'media', 
      label: 'Flag/Icon',
    },

    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },

    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sort Order',
      admin: {
        description: 'Lower number = higher priority',
      },
    },
  ],

  timestamps: true,
};