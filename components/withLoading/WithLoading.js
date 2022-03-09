import React from 'react';

export default function WithLoading(Component) {

    return function WithLoadingComponent({ isLoading, ...props }) {

        if (!isLoading) return <Component {...props} />
        
        return <p>Loading...</p>
    }
}

