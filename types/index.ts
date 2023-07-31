import {TokenType, UserRole} from "@constants/enum";
import RootStore from "@stores/rootStore";
import {NextRouter} from "next/router";
import React from "react";

export type User = {
  id: number
  name: string
}

export type Meta = {
  timestamp: string
  path: string
}

export type ResponseEntity<T> = {
  data: T,
  statusCode: number,
  message?: string,
  meta?: Meta
};

export type JWTPayload = {

  userId: string
  userRole: UserRole
  tokenType: TokenType
}

export type  UserInfo = {
  id: string
  username: string
  email: string
  userRole: UserRole
}

export type InjectedProps = {
  rootStore?: RootStore;
  router?: NextRouter;
}

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>
