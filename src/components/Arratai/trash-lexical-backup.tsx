
                  {/* <div className="max-w-3xl mx-auto">{parseLexical(data?.content)}</div> */}

//   /* ---------------------------------------------
//    LEXICAL HELPERS
// --------------------------------------------- */

//   const FORMAT = {
//     BOLD: 1,
//     UNDERLINE: 1 << 1,
//     ITALIC: 1 << 3,
//   }

//   const renderTextChildren = (children: any[], allowFormatting = true): React.ReactNode => {
//     if (!Array.isArray(children)) return null

//     return children.map((child: any, i: number) => {
//       /* ---------------- TEXT ---------------- */
//       if (child.type === 'text') {
//         let element: React.ReactNode = child.text

//         if (allowFormatting) {
//           if (child.format & FORMAT.BOLD) {
//             element = <strong>{element}</strong>
//           }

//           if (child.format & FORMAT.ITALIC) {
//             element = <em>{element}</em>
//           }

//           if (child.format & FORMAT.UNDERLINE) {
//             element = <u>{element}</u>
//           }
//         }

//         return <span key={i}>{element}</span>
//       }

//       /* ---------------- LINK ---------------- */
//       if (child.type === 'link') {
//         return (
//           <a
//             key={i}
//             href={child.fields?.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-600 underline underline-offset-4 hover:text-pink-700 transition"
//           >
//             {renderTextChildren(child.children, true)}
//           </a>
//         )
//       }

//       /* ---------------- LINE BREAK ---------------- */
//       if (child.type === 'linebreak') {
//         return <br key={i} />
//       }

//       /* ---------------- NESTED ---------------- */
//       if (child.children) {
//         return <span key={i}>{renderTextChildren(child.children, allowFormatting)}</span>
//       }

//       return null
//     })
//   }

//   /* ---------------------------------------------
//    MAIN LEXICAL PARSER
// --------------------------------------------- */

//   const parseLexical = (content: any): React.ReactNode => {
//     if (!content?.root?.children) return null

//     const headingClasses: Record<string, string> = {
//       h1: 'blog-h1',
//       h2: 'blog-h2',
//       h3: 'blog-h3',
//       h4: 'blog-h4',
//       h5: 'blog-h5',
//       h6: 'blog-h6',
//     }

//     return content.root.children.map((node: any, idx: number) => {
//       /* ---------------- PARAGRAPH ---------------- */
//       if (node.type === 'paragraph') {
//         return (
//           <p key={idx} className="mb-5 text-lg leading-[1.9] text-gray-700">
//             {renderTextChildren(node.children)}
//           </p>
//         )
//       }

//       /* ---------------- HEADING ---------------- */
//       if (node.type === 'heading') {
//         const tagName = (node.tag || 'h2') as keyof typeof headingClasses

//         const Tag = (node.tag || 'h2') as React.ElementType

//         return (
//           <Tag key={idx} className={headingClasses[tagName] || headingClasses.h2}>
//             {renderTextChildren(node.children)}
//           </Tag>
//         )
//       }

//       /* ---------------- LIST ---------------- */
//       if (node.type === 'list') {
//         const ListTag = node.listType === 'number' ? 'ol' : 'ul'

//         return (
//           <ListTag
//             key={idx}
//             className={`mb-6 space-y-3 pl-6 text-gray-700 ${
//               node.listType === 'number' ? 'list-decimal' : 'list-disc'
//             }`}
//           >
//             {node.children?.map((child: any, i: number) => (
//               <li key={i}>{renderTextChildren(child.children)}</li>
//             ))}
//           </ListTag>
//         )
//       }


  //     /* ---------------- CODE BLOCK ---------------- */
  //     if (node.type === 'block' && node.fields?.blockType === 'code') {
  //       const code = node.fields?.code || ''
  //       const language = node.fields?.language || 'html'

  //       /* =========================================
  //        HTML PREVIEW
  //        ========================================= */
  //       if (language === 'html') {
  //         return (
  //           <div key={idx} className="my-10">
  //             <div className="container ">
  //               <iframe
  //                 title={`html-preview-${idx}`}
  //                 className="w-[1000px] min-h-[1000px] bg-white"
  //                 sandbox="allow-scripts allow-same-origin"
  //                 srcDoc={`
  //                 <script src="https://cdn.tailwindcss.com"></script>
  //                 ${code} 
  //           `}
  //               />
  //             </div>
  //           </div>
  //         )
  //       }

  //       /* =========================================
  //        CSS PREVIEW
  //        ========================================= */
  //       if (language === 'css') {
  //         return (
  //           <div key={idx} className="my-10">
  //             <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
  //               <iframe
  //                 title={`css-preview-${idx}`}
  //                 className="w-full min-h-[350px] bg-white"
  //                 sandbox="allow-scripts"
  //                 srcDoc={`
  //             <!DOCTYPE html>
  //             <html>
  //               <head>
  //                 <style>
  //                   body{
  //                     margin:0;
  //                     padding:40px;
  //                     font-family:sans-serif;
  //                     background:#f5f5f5;
  //                   }

  //                   ${code}
  //                 </style>
  //               </head>

  //               <body>
  //                 <div class="card">
  //                   <h1>Hello  🔥</h1>
  //                   <p>CSS Live Preview Working</p>
  //                   <button>Click Me</button>
  //                 </div>
  //               </body>
  //             </html>
  //           `}
  //               />
  //             </div>
  //           </div>
  //         )
  //       }

  //       /* =========================================
  //     JAVASCRIPT PREVIEW
  // ========================================= */
  //       if (language === 'javascript') {
  //         return (
  //           <div key={idx} className="my-10">
  //             <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
  //               <iframe
  //                 title={`js-preview-${idx}`}
  //                 className="w-full min-h-[300px] bg-black"
  //                 sandbox="allow-scripts"
  //                 srcDoc={`
  //             <!DOCTYPE html>
  //             <html>
  //               <body
  //                 style="
  //                   background:black;
  //                   color:#00ff88;
  //                   padding:20px;
  //                   font-family:monospace;
  //                 "
  //               >
  //                 <div id="output"></div>

  //                 <script>
  //                   const originalLog = console.log;

  //                   console.log = function(...args){
  //                     document.getElementById('output').innerHTML +=
  //                       args.join(' ') + '<br />';

  //                     originalLog(...args);
  //                   }

  //                   try{
  //                     ${code}
  //                   }catch(err){
  //                     document.getElementById('output').innerHTML =
  //                       '<span style="color:red">' + err + '</span>';
  //                   }
  //                 </script>
  //               </body>
  //             </html>
  //           `}
  //               />
  //             </div>
  //           </div>
  //         )
  //       }

  //       return null
  //     }

//       /* ---------------- UPLOAD IMAGE ---------------- */
//       if (node.type === 'upload') {
//         const image = node.value

//         if (!image?.url) return null

//         return (
//           <div key={idx} className="my-10 overflow-hidden rounded-3xl">
//             <Image
//               src={image.url}
//               alt={image.alt || 'Image'}
//               width={1200}
//               height={700}
//               className="w-full h-auto object-cover rounded-3xl"
//             />

//             {image.caption && (
//               <p className="mt-3 text-center text-sm italic text-gray-500">{image.caption}</p>
//             )}
//           </div>
//         )
//       }

//       /* ---------------- BLOCKS ---------------- */
//       if (node.type === 'block') {
//         const blockType = node.fields?.blockType

//         /* =============================================
//          MEDIA BLOCK
//       ============================================= */
//         if (blockType === 'mediaBlock') {
//           const media = node.fields?.media
//           const link = node.fields?.link
//           const thumbnail = node.fields?.thumbnail

//           if (!media?.url) return null

//           const mainImage = (
//             <Image
//               src={media.url}
//               alt={media.alt || 'Media'}
//               width={1200}
//               height={700}
//               className="w-full h-full object-cover rounded-3xl"
//             />
//           )

//           return (
//             <figure key={idx} className="my-12 relative">
//               <div className="relative overflow-hidden rounded-3xl shadow-xl">
//                 {link?.url ? (
//                   <a
//                     href={link.url}
//                     target={link.newTab ? '_blank' : '_self'}
//                     rel="noopener noreferrer"
//                   >
//                     {mainImage}
//                   </a>
//                 ) : (
//                   mainImage
//                 )}

//                 {/* THUMBNAIL */}
//                 {thumbnail?.url && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {link?.url ? (
//                       <a
//                         href={link.url}
//                         target={link.newTab ? '_blank' : '_self'}
//                         rel="noopener noreferrer"
//                       >
//                         <Image
//                           src={thumbnail.url}
//                           alt="Thumbnail"
//                           width={90}
//                           height={90}
//                           className="rounded-full border-4 border-white shadow-2xl object-cover"
//                         />
//                       </a>
//                     ) : (
//                       <Image
//                         src={thumbnail.url}
//                         alt="Thumbnail"
//                         width={90}
//                         height={90}
//                         className="rounded-full border-4 border-white shadow-2xl object-cover"
//                       />
//                     )}
//                   </div>
//                 )}
//               </div>

//               {media.caption && (
//                 <figcaption className="mt-4 text-center text-sm italic text-gray-500">
//                   {media.caption}
//                 </figcaption>
//               )}
//             </figure>
//           )
//         }

//         /* =============================================
//          VIDEO BLOCK
//       ============================================= */
//         if (blockType === 'videoBlock') {
//           const source = node.fields?.source
//           const url = node.fields?.url
//           const media = node.fields?.media
//           const thumbnail = node.fields?.thumbnail

//           if (!url) return null

//           /* ---------- YOUTUBE ---------- */
//           if (source === 'youtube') {
//             let videoId = ''

//             if (url.includes('youtube.com/watch')) {
//               videoId = url.split('v=')[1]?.split('&')[0]
//             } else if (url.includes('youtu.be/')) {
//               videoId = url.split('youtu.be/')[1]?.split('?')[0]
//             }

//             const embedUrl = `https://www.youtube.com/embed/${videoId}`

//             return (
//               <div key={idx} className="my-12">
//                 <div className="overflow-hidden rounded-3xl shadow-xl">
//                   <iframe
//                     className="aspect-video w-full"
//                     src={embedUrl}
//                     title="YouTube Video"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//               </div>
//             )
//           }

//           /* ---------- INSTAGRAM ---------- */
//           if (source === 'instagram') {
//             const thumbUrl = thumbnail?.url || media?.url

//             return (
//               <div key={idx} className="relative my-12 overflow-hidden rounded-3xl shadow-xl">
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="relative block h-[500px] w-full"
//                 >
//                   <Image src={thumbUrl} alt="Instagram" fill className="object-cover" />

//                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-10 w-10 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             )
//           }

//           /* ---------- NORMAL VIDEO ---------- */
//           return (
//             <div key={idx} className="my-12">
//               <video controls className="w-full rounded-3xl shadow-xl" src={url} />
//             </div>
//           )
//         }

//         return null
//       }

//       return null
//     })
    
//   }

  // const formatDate = (dateStr: string) => {
  //   if (!dateStr) return ''
  //   return new Date(dateStr).toLocaleDateString('en-IN', {
  //     weekday: 'short',
  //     day: 'numeric',
  //     month: 'long',
  //     year: 'numeric',
  //   })
  // }

  // const formatTime = (dateStr: string) => {
  //   if (!dateStr) return ''
  //   return new Date(dateStr).toLocaleTimeString('en-IN', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     hour12: true,
  //   })
  // }
