
import { Card, CardContent } from '@mui/material'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CardSkeleton({qty}) {
    return Array(qty).fill(0).map((_,index) => (<Card sx={{ width: {xs: '80%', sm: '250px', md: '300px'} }} key={index}>
            <Skeleton height={200} style={{marginBottom: '.6rem'}} />
            <CardContent>
                <Skeleton height={35} style={{marginBottom: '.6rem'}} />
                <Skeleton count={3} style={{marginBottom: '.6rem'}} />
                <Skeleton height={30} width="25%" />
            </CardContent>
        </Card>))
}

export default CardSkeleton
