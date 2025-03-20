import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '12338ab7321d42ea992a6042d3ae338e'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '03f8494f816f40dc8ba52e5f797519e7'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '35f948b9c4574472900ec2dd598fe210'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a0b042fca4934bab9ef5f164f578d741'
                    }
                }
            }
        }
    }
}
