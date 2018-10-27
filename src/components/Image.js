import React,{Component} from 'react';

import {Card} from 'antd';

export default () => (
	<Card
		hoverable
		cover={<img style={{height:200,width:240}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="example" />}
	/>
);
