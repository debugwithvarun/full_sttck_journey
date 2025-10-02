import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// C.R.U.D


// 1. create 

// create one movie
const createMovie = async () => {
    const movieInfo = {
        title: "KGF Chapter 1",
        desc: "this is the movie based on coal gold mines",
        releaseDate: new Date("2018-12-02"),
        rating: 4.5,
        genre: "Action/Drama"

    }
    const newMovie = await prisma.film.create({ data: { ...movieInfo } })
    return newMovie;
}

// create many movie 

const createManyMovie = async () => {
    const movieInfo = [
        {
            title: "KGF Chapter 2",
            desc: "this is the movie based on coal gold mines",
            releaseDate: new Date("2020-12-02"),
            rating: 4.5,
            genre: "Action/Drama"
        },
        {
            title: "Pushpa",
            desc: "this is the movie based on  sandal woods",
            releaseDate: new Date("2019-02-02"),
            rating: 4.5,
            genre: "Action/Drama"
        },
        {
            title: "Pushpa: the Rule",
            desc: "this is the movie based on  sandal woods",
            releaseDate: new Date("2023-02-26"),
            rating: 3.5,
            genre: "Action/Drama"
        },
    ]
    const newMovies=await prisma.film.createMany({
        data:movieInfo
    })

    return newMovies;
}

// 2. read 

// read all movie from database 

const readAll = async()=>{
    return await prisma.film.findMany()
}

// read a movie by their id 

const readId =async({movieId}:{movieId:number})=>{
    return await prisma.film.findUnique({
        where:{id:movieId}
    })
}


// read the first movie 
const readFirst = async()=>{
    return await prisma.film.findFirst()
}

// read movie whie id is even 

const readEvenOdd = async (idnum: 0 | 1) => {
    return await prisma.film.findMany().then(movies => movies.filter(movie => movie.id % 2 === idnum));
}


// 3. update

// update the movie  by id 

const updateMovie=async(filmid:number,newTitle:string,newDesc:string,newDate:Date)=>{
    return await prisma.film.update({
        where : {id:filmid},
        data:{
            title:newTitle,
            desc:newDesc,
            releaseDate:newDate
        }
    })

}

// update many field at once 

const updateManyMovie = async(oldRating:number,newRating:number)=>{
    return await prisma.film.updateMany({where:{rating:oldRating},data:{rating:newRating}})
}



// 4. Delete

// delete movie by their id 
const deleteId=async(id:number)=>{
    return await prisma.film.delete({
        where: { id: id }
    })
}


// delete many movie 

const deleteManyRating=async(Rating:number)=>{
    return await prisma.film.deleteMany({
        where:{rating:Rating}
    })
}


const main = async () => {
    // console.log("run withour error")
    // const info = await createMovie()
    // console.log("return info\n", info)
    // const info2 =await createManyMovie()
    // console.log("\n \n \n",info2)

    const allMovie=await readAll()
    console.log(allMovie)


    // console.log(await readId({movieId:4}))

    // console.log(await readFirst())

    // console.log(await readEvenOdd(0) )
    // console.log(await readEvenOdd(1) )

    // console.log(await updateMovie(4,"Avengers DomsDay","Doctor vctor doom will come and control the multiverse and reshape them.",new Date("2026-09-13")))

    // console.log(await updateManyMovie(4.5,2.3))

    // console.log(await deleteId(7))

    // console.log(await deleteManyRating(2.3))
}

main().then(async () => await prisma.$disconnect()).catch(async (e) => {
    console.log("hello there is error");
    await prisma.$disconnect();
    process.exit(1)
}
)