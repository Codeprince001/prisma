import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main(){
  // Create User  // 
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bella Hanie",
  //     email: "bella@bells.com"
  //   }
  // })

  // const users = await prisma.user.findMany()
  // console.log(users)

  // const article = await prisma.article.create({
  //   data: {
  //     title: "john article",
  //     body: "This is awesome",
  //     author: {
  //       connect: {
  //         id: 1
  //       }
  //     }
  //   }
  // })

  // console.log(article)

  const articles = await prisma.article.findMany()
  console.log(articles)

  // create user and article and associate them
//   const user = await prisma.user.create({
//     data: {
//       name: "Bill gray",
//       email: "billy@prisma.com",
//       articles: {
//         create: {
//           title: "Climate change",
//           body: "How climate change affects human life"
//         }
//       }
//     }
//   })

// console.log(user)

// Create another article
// const article = await prisma.article.create({
//   data: {
//     title: "Sample Article",
//     body: "This is still on climate change",
//     author: {
//       connect: {
//         id: 2
//       }
//     }
//   }
// })

// console.log(article)


// Update data
// const user = await prisma.user.update({
//   where: {
//     id: 1
//   },
//   data: {
//     name: "John Bosko"
//   }
// })

// console.log(user)

// Remove Data
// const article = await prisma.article.delete({
//   where: {
//     id: 1
//   }
// })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  }).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
  })