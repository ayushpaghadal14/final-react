import { NavLink } from 'react-router-dom'

export const HOC = (Component) => {
    const NewComp = () => {
        return (
            <>
                <div className="row g-0">
                    <div className="col-3 p-3 text-center position-fixed bg-secondary" style={{ height: "100vh" }}>
                        <h4>admin-pannel</h4>
                        <div className="listed">
                            <ul>
                                <NavLink to="/dashboard"><li>Dash Board</li></NavLink>
                                <NavLink to="/userprofile"><li>User profile</li></NavLink>
                                <NavLink to="/alluser"><li>All User</li></NavLink>
                                <NavLink to="/many"><li>Many More</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className=" ms-auto col-9">
                        <div className="bg-light d-flex justify-content-end">
                            <input type="text" className='m-2 rounded border border-0 shadow shadow-lg px-2' placeholder='Search...' />
                            <button className='btn btn-danger m-2'>LogOut</button>
                        </div>
                        <div className="content p-4">
                            <Component />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return NewComp
}
