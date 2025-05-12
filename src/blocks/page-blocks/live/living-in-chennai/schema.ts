import { Block } from "payload";


const liveInfoBlock: Block = {
  slug: 'livingInChennai',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
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
};

export default liveInfoBlock;
