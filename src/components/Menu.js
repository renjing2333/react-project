import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Card } from 'antd';
import './style.css';
const { Meta } = Card;

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      goods: {
        title: '哈哈哈哈',
        description: '千杯不醉兵马俑',
        price: 66,
        num: 0,
      },
      msg: ''
    }
  }
  handleClick = () => {
    this.setState({
      goods: {
        title: '哈哈哈哈',
        description: '千杯不醉兵马俑',
        price: 66,
        num: this.state.goods.num + 1
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title={this.state.goods.title} description={this.state.goods.description} />
          <div className='menu_addBlock'>
            <span>price: ${this.state.goods.price}</span>
            <button onClick={this.handleClick}>add to cart</button>
          </div>
        </Card>
        <Button type="primary" className='menu_button'><Link to="/cart">Go to cart</Link></Button>
      </div>
    );
  }
};
<script>
function handleClick
</script>