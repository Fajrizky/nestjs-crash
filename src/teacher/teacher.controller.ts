import { Controller, Get, Param } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {

    @Get()
    getTeacher() {
        return 'Get all Teacher'
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ) {
        return `'Get Teacher by Id' ${teacherId}`
    }
}
