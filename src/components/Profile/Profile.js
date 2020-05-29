import React from "react";
import cl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img
                    src="https://www.oxfordtefl.com/wp-content/uploads/2018/04/London-header-800-x-200.jpg"
                    alt=""/>
            </div>
            <div className={cl.profile_content}>
                <div className={cl.profile_header}>
                    <img src="https://vignette.wikia.nocookie.net/puccaandfriends/images/0/00/4667002-5706150299-coura.jpg/revision/latest?cb=20190402004246" alt=""/>
                    <div className={cl.profile_description}>
                        <div className={cl.profile_name}>Mr. Stark</div>
                        <span>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.</span>
                    </div>
                </div>
                <div className={cl.profile_posts}>
                    My posts
                    <div>
                        <textarea className={cl.new_post} placeholder="New post"/>
                        <button className={cl.new_post_button}>Submit</button>
                    </div>
                    <div>
                        <div className='item'>
                            post 1
                        </div>
                        <div className='item'>
                            post 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;