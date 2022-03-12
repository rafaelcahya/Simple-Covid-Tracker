import React, { Component } from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

import chevron_left from '../../../asset/icon/chevron-left.svg'
import chevron_right from '../../../asset/icon/chevron-right.svg'
import home from '../../../asset/icon/home.svg'
import globe from '../../../asset/icon/globe.svg'
import clock from '../../../asset/icon/clock.svg'
import map from '../../../asset/icon/map.svg'
import vaccine from '../../../asset/icon/vaccine.png'
import news from '../../../asset/icon/columns.svg'
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
                                <MenuItem 
                                    icon={<img src={clock} alt="" width={17} />} className='hover:bg-blue-50'>
                                    Daily statistics
                                </MenuItem>
                                <SubMenu icon={<img src={map} alt="" width={17} />}  className='hover:bg-blue-50' title="Territory">
                                    <MenuItem>Country</MenuItem>
                                    <MenuItem>Continent</MenuItem>
                                </SubMenu>
                                <MenuItem 
                                    icon={<img src={vaccine} alt="" width={17} />} className='hover:bg-blue-50'>
                                    Vaccination
                                </MenuItem>
                                <MenuItem 
                                    icon={<img src={news} alt="" width={17} />} className='hover:bg-blue-50'>
                                    News
                                </MenuItem>
                            </SidebarContent>
                        </Menu>
                    </ProSidebar>
                </div>
            </>
        )
    }
}
