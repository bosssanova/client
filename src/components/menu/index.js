import React from 'react'
import { Menu } from 'semantic-ui-react'

class MenuBar extends React.Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        return (
            < Menu compact secondary vertical className="rightNav" >
                <Menu.Item
                    name='dashboard'
                    href="/dashboard"
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}

                />
                <Menu.Item>
                    Inventory
          <Menu.Menu>
                        <Menu.Item
                            name='product'
                            href="/products/lists"
                            active={activeItem === 'product'}
                            onClick={this.handleItemClick}
                        >
                            - Product
            </Menu.Item>
                        <Menu.Item
                            name='editstock'
                            href="/products/editstock"
                            active={activeItem === 'editstock'}
                            onClick={this.handleItemClick}
                        >
                            - Edit Stock
            </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item
                    name='POS'
                    href="/pos"
                    active={activeItem === 'pos'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='report'
                    href="/reports"
                    active={activeItem === 'report'}
                    onClick={this.handleItemClick}
                />
            </Menu >
        )
    }
}

export default MenuBar