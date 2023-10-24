import { PrettyChatWindow } from  'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='b71bd3ad-3919-4a95-b1dd-43072d392f10'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>)
}

export default ChatsPage    