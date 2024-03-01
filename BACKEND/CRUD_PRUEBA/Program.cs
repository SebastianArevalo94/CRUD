using Microsoft.EntityFrameworkCore;
using CRUD_PRUEBA.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PruebasContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("SQL_STRING")));

//Habilitar configuracion de CORS
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: "CoreRules", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CoreRules");

app.MapControllers();

app.Run();
