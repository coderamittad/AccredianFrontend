import { ListGroup, Table } from "flowbite-react";
import React from "react";
import { BenefitsData } from "../../data/data";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
function ReferBenefits() {
  return (
    <div className='max-w-4xl mx-auto py-7'>
      <h2 className='text-center font-[600] text-[20px] leading-[32px] md:text-[27.66px] md:leading-[43px] text-[#1A202C]'>
        What Are The <span className='text-[#1a73e8]'>Referral Benefits</span>?
      </h2>
      <div className='flex justify-end'>
        <Switch checked={true} name='loading' color='primary' />
      </div>
      <div className=' flex justify-center gap-5'>
        <div className=''>
          <ListGroup className='w-52 shadow-md'>
            <ListGroup.Item
              href='#'
              className='bg-[#1A73E8] rounded-tl-lg rounded-tr-lg text-white'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              ALL PROGRAMS
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Strategy & Leadership
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Business Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Product Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Fintech
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Senior Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Data Science
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Digital Transformation
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Business Analytics
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className='overflow-x-auto shadow-md'>
          <Table>
            <Table.Head>
              <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize border-solid border-r-[1px] border-gray-400 py-1'>
                Programs
              </Table.HeadCell>
              <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize border-solid border-r-[1px] border-gray-400 py-1 '>
                Referrer Bonus
              </Table.HeadCell>
              <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize py-1'>
                Referee Bonus
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              {BenefitsData.map((data) => (
                <Table.Row
                  className='bg-white dark:border-gray-700 dark:bg-gray-800 '
                  key={data.id}
                >
                  <Table.Cell className='border-solid border-r-[1px] border-gray-400 py-1'>
                    <span className='flex gap-1'>
                      <HiAcademicCap className='text-[#1350A0] h-4 w-4 mt-1' />
                      {data.program}
                    </span>
                  </Table.Cell>
                  <Table.Cell className='border-solid border-r-[1px] border-gray-400 py-1'>
                    {data.referrer}
                  </Table.Cell>
                  <Table.Cell className='py-1'>{data.referee}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <div className='flex justify-center py-5'>
        <Button
          variant='contained'
          className='font-[400] text-[20px] leading-[24px] px-5 py-1'
        >
          Refer Now
        </Button>
      </div>
    </div>
  );
}

export default ReferBenefits;
