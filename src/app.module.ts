import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { TankModule } from './modules/tank/tank.module';
import { ProductModule } from './modules/product/product.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { PurchasingModule } from './modules/purchasing/purchasing.module';
import { UserModule } from './modules/user/user.module';
import { SalesModule } from './modules/sales/sales.module';
import { ClientModule } from './modules/client/client.module';
import { ReportModule } from './modules/report/report.module';
import { MaintenanceModule } from './modules/maintenance/maintenance.module';
import { HrModule } from './modules/hr/hr.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TankModule,
    ProductModule,
    SupplierModule,
    PurchasingModule,
    UserModule,
    SalesModule,
    ClientModule,
    ReportModule,
    MaintenanceModule,
    HrModule,
  ],
})
export class AppModule {}