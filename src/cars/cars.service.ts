import { Injectable, NotFoundException } from '@nestjs/common'
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto'
import { UpdateCarDto } from './dtos/update-car.dto'
@Injectable()
export class CarsService {
	private cars: Car[] = [
		{
			id: uuid(),
			brand: 'JEEP',
			model: 'Grand Cherokee',
		},
		{
			id: uuid(),
			brand: 'BMW',
			model: 'CX 500',
		},
		{
			id: uuid(),
			brand: 'MINI',
			model: 'Mini Cooper',
		},
	]

	findAll() {
		return this.cars
	}

	findOneById(id: string) {
		const car = this.cars.find((x) => x.id === id)

		if (!car) {
			throw new NotFoundException(`Car with id '${id}' not found`)
		}
		return car
	}

	create(createCarDto: CreateCarDto) {
		const car: Car = {
			id: uuid(),
			...createCarDto,
		}

		this.cars.push(car)
		return car
	}

	update(id: string, updateCarDto: UpdateCarDto) {
		let carDB = this.findOneById(id)

		this.cars = this.cars.map((x) => {
			if (carDB.id === x.id) {
				carDB = {
					...x,
					...updateCarDto,
					id,
				}
				return carDB
			}
			return x
		})

		return carDB
	}
}
