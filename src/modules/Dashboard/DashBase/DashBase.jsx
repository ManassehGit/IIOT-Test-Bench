import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import OuterWrapper from '../OuterWrapper/OuterWrapper'
import InnerWrapper from '../InnerWrapper/InnerWrapper'
import DashContent from '../DashContent/DashContent'
import DashContainer from '../DashContainer/DashContainer'
import Footer from '../Footer/Footer'
import PageTop from '../PageTop/PageTop'

const DashBase = (props) => {
  return (
    <div>
        <OuterWrapper>
            <Sidebar />
            <InnerWrapper>
                <DashContent>
                    <TopNav />
                    <DashContainer>
                        {props.children}
                    </DashContainer>
                </DashContent>
                <Footer />
            </InnerWrapper>
            <PageTop />
        </OuterWrapper>
    </div>
  )
}

export default DashBase