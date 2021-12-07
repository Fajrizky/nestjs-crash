import { Controller, Get, Put } from "@nestjs/common"

@Controller('teacher/:teacherId/student')
export class StudentTeacherController {
    
    @Get()
    getStudent() {
        return 'Get All Student that belong to a teacher'
    }

    @Put('/:studentId')
    updateStudentTeacher() {
        return 'Update Student Teacher'
    }

    
}