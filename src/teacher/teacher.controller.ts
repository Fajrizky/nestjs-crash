import { Controller, Get } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {

    @Get()
    getTeacher() {
        return 'Get all Teacher'
    }

    @Get('/:teacherId')
    getTeacherById() {
        return 'Get Teacher by Id'
    }
}
