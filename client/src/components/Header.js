/**
 * Created by Developer39 on 8/10/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payment from './payments';

class Header extends Component
{
    renderContent()
    {
        switch (this.props.auth)
        {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">LogIn With Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1"><Payment/> </li>,
                    <li key="3" style={{margin:'0 10px'}}>
                        Credits : {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                    ];
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys':'/'}
                        className="brand-logo left">Emaily</Link>
                    <ul className="right">
                            {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth})
{
    return {auth};
}
export default connect(mapStateToProps) (Header);