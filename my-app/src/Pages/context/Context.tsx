import React, { createContext, useState } from 'react'
interface contextUser {
    children: any
    // user: any
    // setUser: string
}


export const UserContext = createContext< {user: any; setUser: any} > ({
    user: null, setUser: null
}); 

export const Context = ({ children }: contextUser) => {
    const [user, setUser] = useState<any>(null)
    // console.log("user/././././././/./././",user);
    
    return (
        <div>

            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>

        </div>
    )
}

