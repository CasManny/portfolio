import { Wrapper } from "@/components/wrapper"
import { PropsWithChildren } from "react"

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <Wrapper>
            {children}
      </Wrapper>
  )
}

export default HomeLayout