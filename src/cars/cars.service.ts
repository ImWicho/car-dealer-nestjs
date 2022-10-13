import { Injectable, NotFoundException } from '@nestjs/common'
import { Car } from './interfaces/car.interface'

@Injectable()
export class CarsService {
	private cars: Car[] = [
		{
			id: 1,
			brand: 'JEEP',
			model: 'Grand Cherokee',
		},
		{
			id: 2,
			brand: 'BMW',
			model: 'CX 500',
		},
		{
			id: 3,
			brand: 'MINI',
			model: 'Mini Cooper',
		},
	]

	findAll() {
		return this.cars
	}

	findOneById(id: number) {
		const car = this.cars.find((x) => x.id === id)

		if (!car) {
			throw new NotFoundException(`Car with id '${id}' not found`)
		}
		return car
	}
}
