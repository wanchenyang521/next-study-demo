import React from 'react';
import PropTypes from 'prop-types';

const Page = (props: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => {
    return (
        <div>
            dashboard page
        </div>
    );
};

Page.propTypes = {

};

export default Page;