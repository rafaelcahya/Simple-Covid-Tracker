import React, { Component } from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

import chevron_left from '../../../asset/icon/chevron-left.svg'
import chevron_right from '../../../asset/icon/chevron-right.svg'
import home from '../../../asset/icon/home.svg'
import globe from '../../../asset/icon/globe.svg'
import map from '../../../asset/icon/map.svg'
import vaccine from '../../../asset/icon/vaccine.png'
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    state = { isCollapse: false };

    handleToggle = () => {
        this.setState({ isCollapse: !this.state.isCollapse });
    };
    
    render() {
        const isCollapse = this.state.isCollapse;
        return (
            <>
                <div className='poppins'>
                    <ProSidebar collapsed={isCollapse ? false : true} className='relative'>
                        <Menu iconShape="square">
                            <SidebarHeader onClick={this.handleToggle} className='pb-2'>
                                {
                                    isCollapse === true ? (
                                        <div className='bg-slate-100 hover:bg-slate-170 mx-5 my-2 p-2 rounded-lg w-fit duration-300'><img src={chevron_left} alt="" /></div>
                                    ) : (
                                        <div className='bg-slate-100 hover:bg-slate-170 mx-5 my-2 p-2 rounded-lg w-fit duration-300'><img src={chevron_right} alt="" /></div>
                                    )
                                }
                            </SidebarHeader>
                            <SidebarContent className='text-tertiary my-5'>
                                <MenuItem 
                                    icon={<img src={home} alt="" width={17} />} className='hover:bg-blue-50'>
                                        <Link to="/">Home</Link>
                                </MenuItem>
                                <MenuItem 
                                    icon={<img src={globe} alt="" width={17} />} className='hover:bg-blue-50'>
                                        <Link to="/global">Global statistics</Link>
                                </MenuItem>
                                <SubMenu icon={<img src={map} alt="" width={17} />}  className='hover:bg-blue-50' title="Territory">
                                    <MenuItem><Link to="/country">Country</Link></MenuItem>
                                    <MenuItem><Link to="/continent">Continent</Link></MenuItem>
                                </SubMenu>
                                <SubMenu icon={<img src={vaccine} alt="" width={17} />}  className='hover:bg-blue-50' title="Territory">
                                    <MenuItem><Link to="/vaccine">Vaccine</Link></MenuItem>
                                    <MenuItem><Link to="/vaccine-tracker">Vaccine tracker</Link></MenuItem>
                                </SubMenu>
                            </SidebarContent>
                        </Menu>
                    </ProSidebar>
                </div>
            </>
        )
    }
}
