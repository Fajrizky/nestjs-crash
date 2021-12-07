import { Controller, Get, Put, Param, Body } from "@nestjs/common"

@Controller('teacher/:teacherId/student')
export class StudentTeacherController {
    
    @Get()
    getStudent(
        @Param('teacherId') teacherId: string,
    ) {
        return `'Get All Student that belong to a teacher' ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
        @Body() body,
    ) {
        return `'Update Student Teacher' ${teacherId} ${studentId} ${JSON.stringify(body)}`
    }
}