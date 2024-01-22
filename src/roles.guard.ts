import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    // const user = request.user;
    const role = request.body.role;
    return matchRoles(roles, role);
  }
}

export function matchRoles(requiredRoles: string[], userRoles: string[]): boolean {
  // Logic to check if user roles match the required roles
  // Return true if there is a match, otherwise return false
  // Implement your specific logic here
  return requiredRoles.every(role => userRoles.includes(role));
}