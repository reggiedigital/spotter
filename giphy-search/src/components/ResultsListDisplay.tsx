import React from 'react'
import { JsxElement } from 'typescript'

export default function showList(apiData: any) {
  apiData?.data.map((item) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.images.original.url} title="green iguana" />
      <CardContent>
        <Typography variant="h5" component="div">
          {item.images.title}
        </Typography>
      </CardContent>
    </Card>
  ))
}
