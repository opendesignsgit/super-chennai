import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  balconies,
  commercialType,
  cornerPlot,
  dimensions,
  ExtraRooms,
  floor,
  furnishedStatus,
  parking,
  plotArea,
  seatingCapacity,
  TYPES_WITH_BEDROOMS,
  washrooms,
} from '@/constants/propertyTypes'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'src/fields/slug'
import {
  validateCheckboxGroupByPropertyType,
  validateDimensionsByPropertyType,
  validateGroupByPropertyType,
  validatePrimitiveByPropertyType,
} from '@/utilities/validateByPropertyType'

export const Properties: CollectionConfig<'properties'> = {
  slug: 'properties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'properties',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    useAsTitle: 'title',
  },

  fields: [
    // PROJECT SELECTIOn

    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },

            //############## PROPERTY IMAGE ##############
            {
              name: 'images',
              type: 'array',
              label: 'Property Images',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
            },
            //############## FAQ #########################
            {
              name: 'faq',
              type: 'array',
              label: 'FAQ',
              labels: {
                singular: 'Question',
                plural: 'Questions',
              },
              fields: [
                { name: 'question', type: 'text', label: 'Question' },
                { name: 'answer', type: 'textarea', label: 'Answer' },
              ],
            },
            //############## MAP VIEW ####################
            {
              name: 'mapView',
              type: 'group',
              label: 'Map View',
              fields: [
                { name: 'latitude', type: 'number', label: 'Latitude' },
                { name: 'longitude', type: 'number', label: 'Longitude' },
                {
                  name: 'mapEmbed',
                  type: 'text',
                  label: 'Google Maps Embed URL',
                },
              ],
            },
            //############## . Nearby / Connectivity ######
            {
              name: 'nearby',
              type: 'array',
              label: 'Nearby / Connectivity',
              fields: [
                { name: 'place', type: 'text', label: 'Place' },
                { name: 'distance', type: 'text', label: 'Distance (km)' },
              ],
            },
            //################# FOLOOR PLAN##################
            {
              name: 'floorPlans',
              type: 'array',
              label: 'Floor Plans',
              fields: [
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Floor Plan (Image/PDF)',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Caption / Plan Name',
                },
              ],
            },
          ],
          label: 'Content',
        },

        //############################ GENTRAL INFORMATIONS  ##########################

        {
          label: 'General Info',
          fields: [
            //##############  Property TYPE  #######################
            {
              name: 'propertyType',
              type: 'relationship',
              relationTo: 'propertyTypes',
              required: true,
              admin: {
                description: 'propertyType',
                position: 'sidebar',
              },
            },
            //##############  Property Purpose  #####################
            {
              name: 'purpose',
              type: 'select',
              required: true,
              options: [
                { label: 'Sale', value: 'sale' },
                { label: 'Rent', value: 'rent' },
                { label: 'Lease', value: 'lease' },
                { label: 'PG / Coliving', value: 'pg' },
              ],
            },
            //############## 2. Tenure / Ownership  #################
            {
              name: 'ownership',
              type: 'select',
              options: [
                { label: 'Freehold', value: 'freehold' },
                { label: 'Leasehold', value: 'leasehold' },
                { label: 'Co-operative Society', value: 'society' },
                { label: 'Power of Attorney', value: 'poa' },
              ],
            },
            //############## 3. Age of Property ######################
            {
              name: 'ageOfProperty',
              type: 'select',
              options: [
                { label: 'New Construction', value: 'new' },
                { label: '0-5 years', value: '0-5' },
                { label: '5-10 years', value: '5-10' },
                { label: '10+ years', value: '10plus' },
              ],
            },
            //############## 4. Transaction Type   Important for under-construction projects: ##############
            {
              name: 'transactionType',
              type: 'select',
              // required: true,
              admin: {
                description:
                  'Select the transaction type for this property (e.g., New Booking, Resale, Pre-Launch)',
              },
              options: [
                { label: 'New Booking', value: 'new_booking' },
                { label: 'Resale', value: 'resale' },
                { label: 'Pre-Launch', value: 'pre_launch' },
              ],
            },

            //############## 3. AGENT IDENTYID ########################
            {
              name: 'agentReraId',
              type: 'text',
              label: 'Agent RERA ID',
            },
            {
              name: 'agentCmdaId',
              type: 'text',
              label: 'Agent CMDA Approval ID',
            },
            {
              name: 'society',
              type: 'group',
              label: 'Society / Project Details',
              fields: [
                { name: 'name', type: 'text', label: 'Project / Society Name' },
                { name: 'builder', type: 'text', label: 'Builder / Developer' },
                { name: 'totalUnits', type: 'number', label: 'Total Units' },
                {
                  name: 'possessionStatus',
                  type: 'select',
                  options: [
                    { label: 'Ready to Move', value: 'ready' },
                    { label: 'Under Construction', value: 'under' },
                  ],
                },
                //############## URL OFFICIAL ############################
                {
                  name: 'externalUrl',
                  type: 'text',
                  label: 'External URL',
                  admin: {
                    description: 'Enter the official website or external link for this property',
                  },
                },
              ],
            },

            //############## LOCATIONS ################################
            {
              name: 'location',
              type: 'relationship',
              relationTo: 'locations',
              required: true,
              admin: {
                description: 'location',
                position: 'sidebar',
              },
            },
            //############## AMENTIES #################################
            // {
            //   name: 'amenities',
            //   type: 'relationship',
            //   relationTo: 'amenities',
            //   hasMany: true,
            //   admin: {
            //     description: 'Amenities',
            //     position: 'sidebar',
            //   },
            // },
            //############## FURNISHING #################################
            {
              name: 'furnishing',
              type: 'select',
              admin: {
                description: 'Furnishing',
              },
              options: [
                { label: 'Fully Furnished', value: 'fully' },
                { label: 'Semi Furnished', value: 'semi' },
                { label: 'Unfurnished', value: 'unfurnished' },
              ],
            },
          ],
        },

        //############################ FEATURE AND SPECS  ##########################

        {
          label: 'Features / Specs',
          fields: [
            //##############  bhk     Info  #################
            {
              name: 'bhk',
              type: 'relationship',
              hasMany: true,
              relationTo: 'bhkTypes',
              // required: true,
              admin: {
                description: 'bhk',
              },
            },
            // //##############  BED ROOMS  ######################

            {
              name: 'bedrooms',
              type: 'number',
              // validate: validateGroupByPropertyType(TYPES_WITH_BEDROOMS, 'bedrooms'),
              // admin: {
              //   hidden: ({ siblingData }) => {
              //     return (
              //       !siblingData?.propertyType || !ExtraRooms.includes(siblingData.propertyType)
              //     )
              //   },
              // },
            },

            //##############  SEMI ROOMS  ######################
            {
              name: 'semiRooms',
              type: 'group',
              label: 'Extra Rooms',
              fields: [
                { name: 'studyRoom', type: 'checkbox', label: 'Study Room' },
                { name: 'servantRoom', type: 'checkbox', label: 'Servant Room' },
                { name: 'poojaRoom', type: 'checkbox', label: 'Pooja Room' },
                { name: 'storeRoom', type: 'checkbox', label: 'Store Room' },
              ],
              // validate: validateCheckboxGroupByPropertyType(ExtraRooms, 'semiRooms', true),
            },
            // ##############  BALCONIES  ######################
            {
              name: 'balconies',
              type: 'number',
              label: 'Number of Balconies',
              admin: {
                condition: (_, siblingData) => !!siblingData?.propertyType,
              },
              // validate: validatePrimitiveByPropertyType(balconies, 'Balconies', true),
            },
            //############### BUILDUP AREA RANGE ##################
            {
              name: 'area',
              type: 'group',
              label: 'Built-up Area Range',
              admin: {
                description: 'Specify the min and max built-up area for apartments in sq.ft',
              },
              fields: [
                { name: 'minSqft', type: 'number', label: 'Minimum Area (sq.ft)' },
                { name: 'maxSqft', type: 'number', label: 'Maximum Area (sq.ft)' },
                { name: 'aker', type: 'text', label: 'Area in Aker (e.g., 0.02-0.05)' },
              ],
            },
            //##############  FLOORS OPTION   ##################
            {
              name: 'floor',
              type: 'number',
              label: 'Total Floors',

              admin: {
                description: 'furnishing',
              },
              // validate: validateGroupByPropertyType(floor, 'Total Floors', true),
            },
            //##############  FACING DIRECTIONS   ##############
            {
              name: 'facingDirection',
              type: 'select',
              options: [
                { label: 'North', value: 'north' },
                { label: 'South', value: 'south' },
                { label: 'East', value: 'east' },
                { label: 'West', value: 'west' },
              ],
              admin: {
                description: 'facingDirection',
              },
            },
            //##############  PARKING FACILITYS   ##############
            {
              name: 'parking',
              type: 'select',
              options: [
                { label: 'Covered', value: 'covered' },
                { label: 'Open', value: 'open' },
                { label: 'None', value: 'none' },
              ],
              admin: {
                description: 'Parking',
              },
              // validate: validateGroupByPropertyType(parking, 'Parking', true),
            },
            //##############  WATER SUPPLY   ####################
            {
              name: 'waterSupply',
              type: 'select',
              options: [
                { label: 'Corporation', value: 'corporation' },
                { label: 'Borewell', value: 'borewell' },
                { label: 'Both', value: 'both' },
              ],
              label: 'Water Supply',
            },
            //##############  parkingOutdoor   ###################
            {
              name: 'parkingOutdoor',
              type: 'group',
              label: 'Parking / Outdoor',
              fields: [
                { name: 'coveredParking', type: 'number', label: 'Covered Parking Slots' },
                { name: 'openParking', type: 'number', label: 'Open Parking Slots' },
                { name: 'visitorParking', type: 'checkbox', label: 'Visitor Parking' },
                { name: 'evCharging', type: 'checkbox', label: 'EV Charging Point' },
              ],
            },
          ],
        },

        //############################ COMMERCIAL PLOT  ##########################
        {
          label: 'Commercial / Plot',
          fields: [
            //##############  COMMERCIAL SPECIFIC   ###############
            {
              name: 'commercialType',
              type: 'select',
              label: 'Commercial Property Type',
              options: [
                { label: 'Office Space', value: 'office' },
                { label: 'Shop / Showroom', value: 'shop' },
                { label: 'Warehouse / Godown', value: 'warehouse' },
                { label: 'Industrial Land', value: 'industrial' },
              ],
              // validate: validateGroupByPropertyType(
              //   commercialType,
              //   'Commercial Property Type',
              //   true,
              // ),
            },
            //##############  SEATING CAPACITY   ###################
            {
              name: 'seatingCapacity',
              type: 'number',
              label: 'Seating Capacity (for offices)',
              // validate: validateGroupByPropertyType(
              //   seatingCapacity,
              //   'Seating Capacity (for offices)',
              //   true,
              // ),
            },
            //##############  WASHROOMS  NUMBERS  ###################
            {
              name: 'washrooms',
              type: 'number',
              label: 'Washrooms',
              // validate: validateGroupByPropertyType(washrooms, 'Washrooms', true),
            },
            //##############  PLOT LAND SPECIFIC  ###################
            {
              name: 'plotArea',
              type: 'number',
              label: 'Plot Area (sq.ft / acres)',
              // validate: validateGroupByPropertyType(plotArea, 'Plot Area (sq.ft / acres)', true),
            },
            //##############  DIMENTIONS  ###########################

            {
              name: 'dimensions',
              type: 'group',
              label: 'Plot Dimensions',
              fields: [
                { name: 'length', type: 'number', label: 'Length' },
                { name: 'width', type: 'number', label: 'Width' },
              ],
              // validate: validateDimensionsByPropertyType(dimensions, 'Dimensions', true),
            },

            //##############  ROAD WIDTH  ###########################
            {
              name: 'roadWidth',
              type: 'number',
              label: 'Road Width (feet)',
            },
            //##############  cornerPlot    ##########################
            {
              name: 'cornerPlot',
              type: 'checkbox',
              label: 'Corner Plot',
              // validate: validateGroupByPropertyType(cornerPlot, 'Corner Plot', true),
            },
          ],
        },

        //############################ FINANCE PRICE  ############################

        {
          label: 'Price / Financials',
          fields: [
            //##############  PRICE WHOLE   ####################
            {
              name: 'price',
              type: 'text',
              // min: 0,
              // max: 99999999999,
              required: true,
              admin: {
                description: 'Supports large numbers (e.g. 1 Cr, 100000000)',
                position: 'sidebar',
              },
            },
            //##############  PRICE PER SQRFT   ################
            {
              name: 'pricePerSqft',
              type: 'number',
              label: 'Price per Sq.ft',
            },
            //##############  MAINTAINCE CHARGE   ###############
            {
              name: 'maintenanceCharges',
              type: 'number',
              label: 'Maintenance Charges (per month)',
            },
            //##############  BOOKING AMOUNT      ###############
            {
              name: 'bookingAmount',
              type: 'number',
              label: 'Booking / Advance Amount',
            },
            //##############  negotiable IS       ###############
            {
              name: 'negotiable',
              type: 'checkbox',
              label: 'Price Negotiable',
            },
            //##############  WHO iS CREATED       ###############
            {
              name: 'listedBy',
              type: 'select',
              label: 'Listed By',
              options: [
                { label: 'Owner', value: 'owner' },
                { label: 'Agent', value: 'agent' },
                { label: 'Builder', value: 'builder' },
              ],
            },
            //##############  CONTACT INFOS     ##################
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Info',
              fields: [
                { name: 'name', type: 'text', label: 'Contact Name' },
                { name: 'phone', type: 'text', label: 'Phone Number' },
                { name: 'email', type: 'email', label: 'Email' },
              ],
            },
          ],
        },

        //############################ Interiors/ FEATRES  ##########################

        {
          label: 'Features / Interiors',
          fields: [
            //############## GREEN FATURES ##############
            {
              name: 'greenFeatures',
              type: 'array',
              label: 'Location Advantages',
              fields: [
                { name: 'feature', type: 'text' }, // e.g., Solar Panels, Rainwater Harvesting
              ],
            },
            //############## interiors FATURES ##########
            {
              name: 'interiors',
              type: 'group',
              label: 'Interiors / Furnishings',
              fields: [
                {
                  name: 'doorType',
                  type: 'select',
                  label: 'Doors / Windows Type',
                  options: [
                    { label: 'Sliding', value: 'sliding' },
                    { label: 'Wooden', value: 'wooden' },
                    { label: 'Glass', value: 'glass' },
                    { label: 'Other', value: 'other' },
                  ],
                },
                {
                  name: 'doorTypeDescription',
                  type: 'text',
                  label: 'Door/Window Description',
                },
                { name: 'wardrobes', type: 'number', label: 'Wardrobes' },
                { name: 'curtains', type: 'checkbox', label: 'Curtains / Blinds' },
                { name: 'modularKitchen', type: 'checkbox', label: 'Modular Kitchen' },
                { name: 'chimney', type: 'checkbox', label: 'Chimney / Exhaust' },
                { name: 'falseCeiling', type: 'checkbox', label: 'False Ceiling / POP Work' },
                { name: 'lighting', type: 'number', label: 'Lighting Fixtures (Count)' },
              ],
              // validate: validateGroupByPropertyType(furnishedStatus, 'Furnishing', true),
            },

            //############## appliances FATURES ##########

            {
              name: 'appliances',
              type: 'group',
              label: 'Appliances / Electronics',
              fields: [
                { name: 'acUnits', type: 'number', label: 'Air Conditioners' },
                { name: 'fridgeCount', type: 'number', label: 'Refrigerators' },
                { name: 'microwaveCount', type: 'number', label: 'Microwaves' },
                { name: 'waterPurifier', type: 'number', label: 'Water Purifiers' },
                { name: 'washingMachine', type: 'checkbox', label: 'Washing Machine' },
                { name: 'dishwasher', type: 'checkbox', label: 'Dishwasher' },
                { name: 'tvCount', type: 'number', label: 'Televisions' },
                { name: 'geyserCount', type: 'number', label: 'Geysers / Water Heaters' },
                { name: 'powerBackup', type: 'checkbox', label: 'Inverter / Power Backup' },
                { name: 'solar', type: 'checkbox', label: 'Solar Panel Setup' },
              ],
            },
            //############## bathroomFeatures  ##########
            {
              name: 'bathroomFeatures',
              type: 'group',
              label: 'Bathroom Features',
              fields: [
                { name: 'bathtubs', type: 'number', label: 'Bathtubs' },
                { name: 'jacuzzi', type: 'checkbox', label: 'Jacuzzi' },
                { name: 'heatedFlooring', type: 'checkbox', label: 'Heated Flooring' },
              ],
            },
            //############## buildingAmenities  ##########
            {
              name: 'buildingAmenities',
              type: 'group',
              label: 'Building / Amenities',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'elevator', type: 'checkbox', label: 'Lift / Elevator' },
                    { name: 'security', type: 'checkbox', label: 'Security / CCTV' },
                    { name: 'intercom', type: 'checkbox', label: 'Intercom Facility' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'fireSafety', type: 'checkbox', label: 'Fire Safety System' },
                    { name: 'clubhouse', type: 'checkbox', label: 'Clubhouse Access' },
                    { name: 'swimmingPool', type: 'checkbox', label: 'Swimming Pool' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'gym', type: 'checkbox', label: 'Gym / Fitness Center' },
                    { name: 'playArea', type: 'checkbox', label: 'Children’s Play Area' },
                    { name: 'garden', type: 'checkbox', label: 'Garden / Park' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'yogaArea', type: 'checkbox', label: 'Yoga Area' },
                    { name: 'clubHouse', type: 'checkbox', label: 'Club House' },
                    { name: 'miniTheatre', type: 'checkbox', label: 'Mini Theatre' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'indoorGames', type: 'checkbox', label: 'Indoor Games' },
                    { name: 'herbGarden', type: 'checkbox', label: 'Herb Garden' },
                    { name: 'multipurposeHall', type: 'checkbox', label: 'Multipurpose Hall' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'liftLobby', type: 'checkbox', label: 'Lift Lobby' },
                    { name: 'amphitheatre', type: 'checkbox', label: 'Amphitheatre' },
                    { name: 'creche', type: 'checkbox', label: 'Creche' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'lobby', type: 'checkbox', label: 'Lobby' },
                    { name: 'reflexology', type: 'checkbox', label: 'Reflexology' },
                    { name: 'seatingPlaza', type: 'checkbox', label: 'Seating Plaza' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'dropOff', type: 'checkbox', label: 'Drop Off' },
                    { name: 'retreatTerrace', type: 'checkbox', label: 'Retreat Terrace' },
                    { name: 'mandate', type: 'checkbox', label: 'Mandate' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'tranquilDeck', type: 'checkbox', label: 'Tranquil Deck' },
                    { name: 'aiFresco', type: 'checkbox', label: 'AI Fresco' },
                    { name: 'theLounge', type: 'checkbox', label: 'The Lounge' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'fairviewDeck', type: 'checkbox', label: 'Fairview Deck' },
                    { name: 'wellnessPatio', type: 'checkbox', label: 'Wellness Patio' },
                    { name: 'aerobicsZumba', type: 'checkbox', label: 'Aerobics & Zumba' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'basementParking', type: 'checkbox', label: 'Basement Parking' },
                    { name: 'evChargingPoint', type: 'checkbox', label: 'EV Charging Point' },
                    { name: 'kidsPlayArea', type: 'checkbox', label: 'Kids Play Area' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'pergolaSeating', type: 'checkbox', label: 'Pergola Seating' },
                    { name: 'tennisCourt', type: 'checkbox', label: 'Tennis Court' },
                    { name: 'chessBoard', type: 'checkbox', label: 'Chess Board' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'cricketPracticePitch',
                      type: 'checkbox',
                      label: 'Cricket Practice Pitch',
                    },
                    { name: 'futsalCourt', type: 'checkbox', label: 'Futsal Court' },
                    {
                      name: 'halfBasketballCourt',
                      type: 'checkbox',
                      label: 'Half Basketball Court',
                    },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'hopscotch', type: 'checkbox', label: 'Hopscotch' },
                    { name: 'moundsPlayArea', type: 'checkbox', label: 'Mounds & Play Area' },
                    { name: 'snakesAndLadder', type: 'checkbox', label: 'Snakes & Ladder' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'coWorking', type: 'checkbox', label: 'Co Working' },
                    { name: 'partyHall', type: 'checkbox', label: 'Party Hall' },
                    { name: 'skatingRink', type: 'checkbox', label: 'Skating Rink' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'miniGolf', type: 'checkbox', label: 'Mini Golf' },
                    { name: 'basketballCourt', type: 'checkbox', label: 'Full Basketball Court' },
                    { name: 'soccerField', type: 'checkbox', label: 'Soccer / Football Field' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'bocceCourt', type: 'checkbox', label: 'Bocce / Lawn Bowling' },
                    { name: 'cyclingTrack', type: 'checkbox', label: 'Cycling Track' },
                    { name: 'rockClimbingWall', type: 'checkbox', label: 'Rock Climbing Wall' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'zipLine', type: 'checkbox', label: 'Zip Line' },
                    { name: 'trampolinePark', type: 'checkbox', label: 'Trampoline Park' },
                    { name: 'petPark', type: 'checkbox', label: 'Pet Park' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'amphitheaterStage', type: 'checkbox', label: 'Amphitheater Stage' },
                    { name: 'communityGarden', type: 'checkbox', label: 'Community Garden' },
                    { name: 'readingLounge', type: 'checkbox', label: 'Reading / Library Lounge' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    {
                      name: 'multipurposePlayArea',
                      type: 'checkbox',
                      label: 'Multipurpose Play Area',
                    },
                    {
                      name: 'basketballHalfCourt',
                      type: 'checkbox',
                      label: 'Half Basketball Court (Additional)',
                    },
                    { name: 'boardGamesRoom', type: 'checkbox', label: 'Board Games Room' },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    { name: 'meditationDeck', type: 'checkbox', label: 'Meditation Deck' },
                    { name: 'outdoorFitnessZone', type: 'checkbox', label: 'Outdoor Fitness Zone' },
                    { name: 'hammockLounge', type: 'checkbox', label: 'Hammock / Relax Zone' },
                  ],
                },
                { name: 'firePit', type: 'checkbox', label: 'Fire Pit / BBQ Area' },
              ],
            },
            // ##############SPECFICATIONS ################

            {
              name: 'specifications',
              type: 'group',
              label: 'Specifications',
              admin: {
                description: 'Detailed property specifications',
              },
              fields: [
                { name: 'structure', type: 'textarea', label: 'Structure' },
                { name: 'floorFinish', type: 'textarea', label: 'Floor Finish with Skirting' },
                { name: 'wallFinishes', type: 'textarea', label: 'Wall Finishes' },
                { name: 'kitchenUtility', type: 'textarea', label: 'Kitchen / Utility' },
                { name: 'bathrooms', type: 'textarea', label: 'Bathrooms' },
                { name: 'joinery', type: 'textarea', label: 'Joinery' },
                { name: 'windows', type: 'textarea', label: 'Windows' },
                { name: 'waterproofing', type: 'textarea', label: 'Waterproofing' },
                { name: 'electrical', type: 'textarea', label: 'Electrical' },
                {
                  name: 'communicationSecurity',
                  type: 'textarea',
                  label: 'Communication / Security',
                },
                { name: 'plumbing', type: 'textarea', label: 'Plumbing' },
                { name: 'commonFeatures', type: 'textarea', label: 'Common Features' },
              ],
            },
          ],
        },

        //############################ Rental / info  ##########################

        {
          label: 'Rental Info',
          fields: [
            //############## 9. Rental-Specific Fields ##############
            {
              name: 'rentDetails',
              type: 'group',
              admin: { condition: (_, data) => data.purpose === 'rent' },
              fields: [
                { name: 'monthlyRent', type: 'number', label: 'Monthly Rent' },
                { name: 'securityDeposit', type: 'number', label: 'Security Deposit' },
                { name: 'maintenanceIncluded', type: 'checkbox', label: 'Maintenance Included' },
                {
                  name: 'preferredTenants',
                  type: 'select',
                  hasMany: true,
                  options: [
                    { label: 'Family', value: 'family' },
                    { label: 'Bachelors', value: 'bachelors' },
                    { label: 'Company Lease', value: 'company' },
                  ],
                },
              ],
            },
          ],
        },

        //############################ META MEADIA  #####################################

        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },

        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'properties',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
      ],
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },

    // ###################################### SIDEBAR FEATURES  ######################################################################################################################################

    //############## availabilityStatus ##############

    {
      name: 'availabilityStatus',
      type: 'select',
      admin: { position: 'sidebar' },
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Booked', value: 'booked' },
        { label: 'Sold Out', value: 'sold' },
      ],
      label: 'Availability',
    },
    //############## featured VISIBLITY ##############
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Property',
      admin: { position: 'sidebar' },
    },

    //############## URGENT SALE  #####################
    {
      name: 'urgentSale',
      type: 'checkbox',
      label: 'Urgent Sale',
      admin: { position: 'sidebar' },
    },

    {
      name: 'security',
      type: 'checkbox',
      label: 'Security Available',
      admin: { position: 'sidebar' },
    },
    {
      name: 'liftAvailable',
      type: 'checkbox',
      label: 'Lift Available',
      admin: { position: 'sidebar' },
    },

    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],

  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
