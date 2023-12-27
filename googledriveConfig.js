const fs = require('fs')
const { google } = require('googleapis')
const GOOGLE_API_FOLDER_ID = '1Hob1o67fP9K9wUS3j8lKGY1knS8xux-D'


const uploadFiles = async (filename, filePath) => {

    try {

        const auth = new google.auth.GoogleAuth({
            keyFile: './googleDrive.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const media = {
            body: fs.createReadStream(filePath)
        }

        const response = await driveService.files.create({
            requestBody:{
                'name': filename,
                parents: [GOOGLE_API_FOLDER_ID]
            },
            media: media,
            fields: 'id'
        })

        return response.data.id
        
    } catch (error) {
        console.log(error)
    }

}


module.exports = {uploadFiles}
