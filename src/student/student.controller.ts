import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";


@Controller('student')
export class StudentController {
    
    @Get()
    getStudent() {
        return 'Get all student'
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {
        return `Get student by Id = ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body,
    ) {
        return `Created student ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body,
    ) {
        return `Updated student ${studentId} with data ${JSON.stringify(body)}`
    }
}