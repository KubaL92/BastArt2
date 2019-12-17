import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { authService } from '../../_services/authService';

class DropMenu extends Component{
    render(){
        const {role, currentUser} = this.props;
         return(
            <div className="btn-group dropleft">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                {currentUser === null
                ?
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to={'/login'}>Login</Link>
                        <Link className="dropdown-item" to={'/register'}>Register</Link>
                    </div>
                :
                    <div className="dropdown-menu dropdown-menu-right">
                        <small style={{fontWeight: 500, fontSize: 14}} className="ml-2">Logged as: {currentUser.username}</small>
                        <hr/>
                        <Link className="dropdown-item" to={'/'}>My Profile</Link>
                        <Link className="dropdown-item" to={'/'}>Start a project</Link>
                        <Link className="dropdown-item" to={'/'}>My orders</Link>
                        <hr/>
                        {role === 'User'
                        ?
                            <Link className="dropdown-item" to={'/'}>Become an aritst</Link>
                        :
                            <React.Fragment>
                                <Link className="dropdown-item" to={'/'}>My portfolio</Link>
                                <Link className="dropdown-item" to={'/'}>My projects</Link>
                            </React.Fragment>
                        }
                        <hr/>
                        <Link className="dropdown-item" onClick={authService.logout} to={'/'}>Logout</Link>
                    </div>
                }
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    role: state.role
})

export default connect(mapStateToProps, {}) (DropMenu);