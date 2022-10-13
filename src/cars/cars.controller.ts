import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	ParseUUIDPipe,
	Patch,
	Post,
} from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDto } from './dtos/create-car.dto'
import { UpdateCarDto } from './dtos/update-car.dto'

@Controller('cars')
export class CarsController {
	constructor(private readonly carsSvc: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsSvc.findAll()
	}

	@Get(':id')
	getCarById(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsSvc.findOneById(id)
	}

	@Post()
	createCar(@Body() createCarDto: CreateCarDto) {
		return this.carsSvc.create(createCarDto)
	}

	@Patch(':id')
	updateCar(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string) {
		return this.carsSvc.update(id, updateCarDto)
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseIntPipe) id: number) {
		return id
	}
}
