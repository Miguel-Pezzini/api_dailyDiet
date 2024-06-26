// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      username: string
      email: string
      created_at: string
      session_id?: string
      user_id?: string
    }
  }
}
