import { gql } from '@apollo/client';

export const CollapseConversationAndUserInFoGQL = gql`
    query CONVERANDINFO($userId:UUID!){
        GetCollapseConversations(userId: $userId){
            isGroup
            conversationId
            conversationName
            isMessageRequest
            conversationImagePath
            isBlock
            blockBy
            conversationId
            quickMessage
            lastMessage {
                id
                conversationId
                senderId
                content
                messageType
                sendAt
            }
            createAt
            isFavoriteConversation
            authorId
            participantUser{
                lastReadMessageId
                nickName
                userId
                firstName
                lastName
                email
                profileImagePath
                profileDescription
                userName
                gender
            }
        }
        GetUserById(userId: $userId) {
            userId
            gender
            userName
            firstName
            lastName
            profileImagePath
            profileDescription
            phoneNumber
            dob
            email
        }
        GetOnlineFriends(userId: $userId){
            friendId
            addAt
            firstName
            lastName
            dob
            profileDescription
            profileImagePath
            gender
        }
    }
`
export const FristMessageGQL = gql`
    query FirstMessage($conversationId: Long!){
        GetFirstMessages(conversationId: $conversationId) {
            isGroup
            conversationName
            conversationId
            authorId
            isMessageRequest
            conversationImagePath
            isBlock
            blockBy
            conversationId
            quickMessage
            conversationTheme {
                id
                themeName
                bgType
                bgColor
                ownMessageColor
                friendMessageColor
            }
            participants{
                lastReadMessageId
                nickName
                userId
                userName
                firstName
                lastName
                email
                profileImagePath
                profileDescription
            }
            messages{
                id
                conversationId
                senderId
                content
                messageType
                sendAt
                filePath
                fileSize
                messageReaction{
                    userId
                    firstName
                    lastName
                    userName
                    profileImagePath
                    reactionType
                    messageId
                }
            }
        }
    }

`
export const GetOnlineFriends = gql`
    query($userId:UUID!){
        GetOnlineFriends(userId: $userId){
            friendId
            addAt
            firstName
            lastName
            dob
            profileDescription
            profileImagePath
            gender
        }
    }
`
export const GetFriendsGQl = gql`
    query Friends($userId:UUID!){
        GetFriends(userId: $userId){
            friendId
            addAt
            firstName
            lastName
            dob
            profileDescription
            profileImagePath
            gender
        }
    }
`






