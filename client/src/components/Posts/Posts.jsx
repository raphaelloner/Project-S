const Posts = ({ posts }) => {

    return (
        <div>
            <table>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.username}</td>
                            <td>{post.content}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Posts;