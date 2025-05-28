import { Block } from 'payload'
const liveIntrorSection: Block = {
  slug: 'liveIntrorSection',
  labels: {
    singular: 'Live Intro Section',
    plural: 'Live Intro Section',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Living in Chennai',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'paraZeroLiveSection',
      type: 'text',
      label: 'First Paragraph',
      required: true,
    },
    {
      name: 'paraoneLiveSection',
      type: 'text',
      label: 'Second Paragraph',
      required: true,
    },
    {
      name: 'paraTwoLiveSection',
      type: 'text',
      label: 'Third Paragraph',
      required: true,
    },
  ],
}

export default liveIntrorSection
