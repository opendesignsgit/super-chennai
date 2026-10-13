import { Block } from 'payload'

export const MetroExperienceBlock: Block = {
  slug: 'MetroExperienceBlock',
  labels: {
    singular: 'Metro Experience Section',
    plural: 'Metro Experience Sections',
  },

  imageURL: '/images/sections-image/singlealone3.jpg',
  admin: {
    group: 'Singe Alone Metro',
  },
  fields: [
    // Left Box - The Experience
    {
      name: 'leftTitle',
      type: 'text',
      label: 'Left Card Title',
      defaultValue: 'THE EXPERIENCE',
      required: true,
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Experience Highlights (Bullet Points)',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Point Description',
          required: true,
        },
      ],
    },
    {
      name: 'checkSvgCode',
      type: 'textarea',
      label: 'Checkmark SVG Code (Optional - Default Check Circle used if empty)',
    },

    // Right Box - Who Can Join
    {
      name: 'rightTitle',
      type: 'text',
      label: 'Right Card Title',
      defaultValue: 'WHO CAN JOIN?',
      required: true,
    },
    {
      name: 'whoCanJoinParagraph1',
      type: 'textarea',
      label: 'Who Can Join Paragraph 1',
      defaultValue: 'Anyone who loves Chennai, music and a good sing-along!',
    },
    {
      name: 'whoCanJoinParagraph2',
      type: 'textarea',
      label: 'Who Can Join Paragraph 2',
      defaultValue:
        "Limited Slots only, REGISTER NOW and don't miss the chance to be part of this exclusive Madras Day celebration",
    },

    // Optional Button Config
    {
      name: 'enableButton',
      type: 'checkbox',
      label: 'Show Register Button',
      defaultValue: false,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'REGISTER NOW',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enableButton),
      },
    },
    {
      name: 'buttonTargetId',
      type: 'text',
      label: 'Form Section HTML ID to scroll (e.g. "registration-form")',
      defaultValue: 'registration-form',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enableButton),
      },
    },
  ],
}
