import { Controller, Get, Post, Param, Body, Put, Delete, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express'; // Import Express Response for custom responses
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { validateOrReject } from 'class-validator';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const hotels = await this.hotelService.findAll();
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Hotels retrieved successfully',
      statusCode: HttpStatus.OK,
      data: hotels,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    const hotel = await this.hotelService.findOne(Number(id));
    if (!hotel) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `Hotel with ID ${id} not found`,
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Hotel retrieved successfully',
      statusCode: HttpStatus.OK,
      data: hotel,
    });
  }

  @Post()
  async create(@Body() hotel: Hotel, @Res() res: Response): Promise<Response> {
    try {
      await validateOrReject(hotel); 
      const newHotel = await this.hotelService.create(hotel);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Hotel created successfully',
        statusCode: HttpStatus.CREATED,
        data: newHotel,
      });
    } catch (errors) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Validation failed',
        statusCode: HttpStatus.BAD_REQUEST,
        errors: errors,
      });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() hotel: Partial<Hotel>,
    @Res() res: Response,
  ): Promise<Response> {
    const updatedHotel = await this.hotelService.update(Number(id), hotel);
    if (!updatedHotel) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `Hotel with ID ${id} not found`,
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Hotel updated successfully',
      statusCode: HttpStatus.OK,
      data: updatedHotel,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    const hotel = await this.hotelService.findOne(Number(id));
    if (!hotel) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `Hotel with ID ${id} not found`,
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    await this.hotelService.remove(Number(id));
    return res.status(HttpStatus.OK).json({
      success: true,
      message: `Hotel with ID ${id} deleted successfully`,
      statusCode: HttpStatus.OK,
    });
  }
}
