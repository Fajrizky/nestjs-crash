import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('student')
export class StudentController {
    
    @Get()
    getStudent() {
        return 'Get all student'
    }

    @Get('/:studentId')
    getStudentById() {
        return 'Get student by Id'
    }

    @Post()
    createStudent() {
        return 'Created student'
    }

    @Put('/:studentId')
    updateStudent() {
        return 'Updated student'
    }
}