import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { CarsService } from './cars.service'

@Controller('cars')
export class CarsController {
	constructor(private readonly carsSvc: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsSvc.findAll()
	}

	@Get(':id')
	getCarById(@Param('id', ParseIntPipe) id: number) {
		return this.carsSvc.findOneById(id)
	}

	@Post()
	createCar(@Body() body: any) {
		return body
	}

	@Patch(':id')
	updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
		return {
			id,
			...body,
		}
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseIntPipe) id: number) {
		return id
	}
}
