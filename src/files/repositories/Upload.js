const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')
const {uploadFiles} = require('../../../googledriveConfig')


const upload = async (req, res) => {

    var file = req.file
    var id = parseInt(req.params.id)

    
    try {
        
        const filename = file.filename
        const filePath = file.path

        const data = await uploadFiles(filename, filePath)

        await prisma.user.update({
            where:{
                id: id
            },
            data:{
                profile_image: data
            }
        })
        res.json({message: 'Imagem adicionada com sucesso'})

    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {upload}